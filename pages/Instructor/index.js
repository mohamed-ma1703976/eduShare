import React, { use, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function instructorDashboard() {

    const [statusCheck, setstatusCheck] = useState(false)
    const { data, loading, error } = useFetch('http://localhost:1337/api/instructor-signups')
    useEffect(() => {
        if (data && data.data) {
            const hasPendingRequests = data.data.some(
                (item) => item.attributes.Status === "Pending"
            );
            setstatusCheck(hasPendingRequests);
        }
    }, [data]);


    console.log(statusCheck);
    
    return (
        <div>

            <div>
                {statusCheck ? (
                    <p>Your request is pending</p>
                ) : (
                    <p>Instructor Dashboard</p>
                )}
            </div>

        </div>
    );
}
