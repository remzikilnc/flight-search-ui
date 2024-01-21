import {useEffect, useState} from 'react';
import {MdFlightLand, MdFlightTakeoff} from "react-icons/md";
import AutoCompleteInput from "../form-elements/auto-complate/index.jsx";
import {getDate} from "../../utils/time/getDate.js";
import CustomRadioButton from "../form-elements/radio-button/button/index.jsx";
import CustomRadioButtonGroup from "../form-elements/radio-button/index.jsx";
import FormElementsDateInput from "../form-elements/input/date/index.jsx";
import FormElementsButton from "../form-elements/button/index.jsx";
import RoundedChangeButton from "./rounded-change-button/index.jsx";
import FormElementLabel from "../form-elements/label/index.jsx";
import {fetchFlights} from "../../actions/fetch-flights.jsx";
import {fetchAirports} from "../../actions/fetch-airports.jsx";
import {useFormik} from "formik";
import * as Yup from 'yup';

const FlySearch = (props) => {
    const {
        loading,
        setResults,
        setRoundTripResults,
        setLoading,
        roundTripLoading,
        setRoundTripLoading,
        isRoundTrip,
        setIsRoundTrip,
        setSearchPerformed
    } = props;
    const [airports, setAirports] = useState([]);
    const [takeOffAirport, setTakeOffAirport] = useState([]);
    const [landingAirport, setLandingAirport] = useState([]);

    useEffect(() => {
        fetchAirports({page: 1, limit: 10}).then((response) => {
            setAirports(response.data);
            setTakeOffAirport(response.data[0]);
            setLandingAirport(response.data[1]);
        })
    }, []);

    const changeAirports = () => {
        setTakeOffAirport(landingAirport);
        setLandingAirport(takeOffAirport);
    }

    const handleSubmit = async (values) => {
        setResults([]);
        setRoundTripResults([]);
        setSearchPerformed(true);
        if (isRoundTrip)
            setRoundTripLoading(true);
        setLoading(true);

        try {
            const response = await fetchFlights({
                departureAirportCode: takeOffAirport.AirportCode,
                arrivalAirportCode: landingAirport.AirportCode,
                departureDateTime: values.flightTakeOffDate
            });
            setResults(response);
        } catch (error) {
            if (error.response?.status === 404) {
                // handle 404
            }
        } finally {
            setLoading(false);
        }

        if (isRoundTrip) {
            try {
                const response = await fetchFlights({
                    departureAirportCode: landingAirport.AirportCode,
                    arrivalAirportCode: takeOffAirport.AirportCode,
                    departureDateTime: values.flightLandingDate
                });
                setRoundTripResults(currentResults => [...currentResults, ...response]);
            } catch (error) {
                if (error.response?.status === 404) {
                    // handle 404
                }
            } finally {
                setRoundTripLoading(false);
            }
        }
    };


    const formik = useFormik({
        initialValues: {
            departureAirportCode: takeOffAirport.AirportCode,
            arrivalAirportCode: landingAirport.AirportCode,
            flightTakeOffDate: /*getDate(1)*/ '2024-05-22',
            flightLandingDate: /*getDate(2)*/ '2024-05-22',
        },
        validationSchema: Yup.object({
            flightTakeOffDate: Yup.date().min(getDate(0)).required(),
            flightLandingDate: Yup.date().min(getDate(1)),
        }),
        onSubmit: values => {
            handleSubmit(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex gap-y-8 flex-col">
            <div className="flex gap-x-2 sm:gap-x-12 items-center z-20">
                <div className="flex flex-col items-center p-2 rounded-md backdrop-blur-sm">
                    <FormElementLabel htmlFor="flightTakeOffAirport" Icon={<MdFlightTakeoff className="text-white/70 h-5 w-5"/>} className="mr-8">Nereden</FormElementLabel>
                    <AutoCompleteInput name="flightTakeOffAirport" id="flightTakeOffAirport" data={airports} setSelected={setTakeOffAirport} selected={takeOffAirport}/>
                </div>
                <RoundedChangeButton onClick={changeAirports}/>
                <div className="flex flex-col items-center p-2 rounded-md backdrop-blur-sm">
                    <FormElementLabel htmlFor="flightLandingAirport" Icon={<MdFlightLand className="text-white/70 h-5 w-5"/>} className="mr-8">Nereye</FormElementLabel>
                    <AutoCompleteInput name="flightLandingAirport" id="flightLandingAirport" data={airports} setSelected={setLandingAirport} selected={landingAirport}/>
                </div>
            </div>
            <div className="flex justify-center">
                <CustomRadioButtonGroup>
                    <CustomRadioButton active={isRoundTrip} onClick={() => setIsRoundTrip(true)}>Gidiş Dönüş</CustomRadioButton>
                    <CustomRadioButton active={!isRoundTrip} onClick={() => setIsRoundTrip(false)}>Tek Yön</CustomRadioButton>
                </CustomRadioButtonGroup>
            </div>
            <div className="gap-x-2 sm:gap-x-32 w-full grid-cols-2 grid">
                <div className="flex flex-col items-center gap-y-1">
                    <FormElementLabel htmlFor="flightTakeOffDate" className="z-10">Gidiş Tarihi</FormElementLabel>
                    <FormElementsDateInput name="flightTakeOffDate" id="flightTakeOffDate" type="date" onChange={formik.handleChange} value={formik.values.flightTakeOffDate}/>
                </div>
                <div className={`flex flex-col items-center gap-y-1 duration-300 transition-opacity ${isRoundTrip ? 'opacity-100' : 'opacity-0'}`}>
                    <FormElementLabel htmlFor="flightLandingDate" className="z-10">Dönüş Tarihi</FormElementLabel>
                    <FormElementsDateInput name="flightLandingDate" id="flightLandingDate" type="date" onChange={formik.handleChange} value={formik.values.flightLandingDate}/>
                </div>
            </div>
            <div>
                <FormElementsButton disabled={roundTripLoading || loading} >Ara</FormElementsButton>
            </div>
        </form>
    );
};

export default FlySearch;