import {useEffect, useState} from "react";
import axios from "axios";

const useGetCitizens = () => {
    const [loading, setLoading] = useState(false);
    const [citizens, setCitizens] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;
        setLoading(true);

        axios
            .get(`${apiUrl}/citizens`)
            .then(response => {
                setCitizens(response.data);
                setError(null);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, []);

    return [loading, citizens, error];
}

export default useGetCitizens;
