import { useEffect, useState } from "react";
import FormInput from "../Staff/views/FormInput";
import { Message, Button } from "semantic-ui-react";
import axiosconfig, { setToken } from "../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../toast";

export default function Add_Zone() {
    useEffect(() => {
        require("../../CSS/StaffRegistration.css")
    })
    const handleGoHome = () => {
        console.log("In handle");
        window.location.href = "http://localhost:3000/";
    }
    const [values, setValues] = useState({
        zone_name: "",
        zone_id: "",
        residential_per: "",
        commercial_per: "",
        industrial_per: "",
        uav: "",
    });
    if (localStorage.getItem('role') == '1') {

        const inputs = [
            {
                id: 1,
                name: "zone_name",
                type: "text",
                placeholder: "Zone Name",
                label: "Zone Name",
                required: true,
            },
            {
                id: 2,
                name: "zone_id",
                type: "text",
                placeholder: "Zone Id",
                label: "Zone Id",
                required: true,
            },
            {
                id: 3,
                name: "residential_per",
                type: "text",
                placeholder: "Residential Percentage",
                label: "Residential Percentage",
                required: true,
            },
            {
                id: 4,
                name: "commercial_per",
                type: "text",
                placeholder: "Commercial Percentage",
                label: "Commercial Percentage",
                required: true,
            },
            {
                id: 5,
                name: "industrial_per",
                type: "text",
                placeholder: "Industrial Percentage",
                label: "Industrial Percentage",
                required: true,
            },
            {
                id: 6,
                name: "uav",
                type: "text",
                placeholder: "UAV",
                label: "Unit Area Value",
                required: true,
            },
        ];
        const chaeckData = (obj) => {
            console.log(obj);
            const { zone_name, zone_id, residential_per, commercial_per, industrial_per, uav } = obj;
            if (zone_name.length == 0) {
                notify('Please enter zone name', 'error');
                return;
            }
            if (zone_id.length == 0) {
                notify('Please enter zone id', 'error');
                return;
            }
            if (residential_per.length == 0) {
                notify('Please enter residential percentage', 'error');
                return;
            }
            if (commercial_per.length ==0) {
                notify('Please enter commercial percentage', 'error');
                return;
            }
            if (industrial_per.length == 0) {
                notify('Please enter industrial percentage', 'error');
                return;
            }
            if (uav.length ==0) {
                notify('Please enter Unit Area Value', 'error');
                return;
            }


            var link = '/zoneRegister';
            setToken(localStorage.getItem('token'));
            const api = axiosconfig
                .post(link, obj)
                .then((response) => response.data)
                .then(async (data) => {
                    console.log(data)
                    if (data) {

                        notify("You have registered successfully", "success")
                        window.location.href = "http://localhost:3000/adminDashboard";

                    } else {
                        notify(data.message, "error")
                    }
                });
            toast.promise(api, {
                pending: "Loading your data...",
                success: false,
                error: "Something went wrong!",
            });
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            chaeckData(values);
        };

        const onChange = (e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
        };

        const handleGoHome = () => {
            console.log("In handle");
            window.location.href = "http://localhost:3000/";
        }

        if (localStorage.getItem('role') == '1') {
            return (
                <div className="appp">
                    <form onSubmit={handleSubmit}>
                        <h1>Add Zone</h1>
                        <br></br><br></br>
                        {inputs.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                        <div className="btnn">
                            <button onClick={handleSubmit} className="btn_submit">Submit</button>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            );
        }
        else {
            return (
                <Message floating style={{ padding: '60px' }}>
                    <h2>You are not authorised as Admin. Please login again!</h2>
                    <div>
                        <Button color='primary' onClick={handleGoHome}>Go to Home</Button>
                    </div>
                </Message>
            )
        }
    }
    else {
        return (
            <Message floating style={{ padding: '60px' }}>
                <h2>You are not authorised as Admin. Please login again!</h2>
                <div>
                    <Button color='primary' onClick={handleGoHome}>Go to Home</Button>
                </div>
            </Message>
        )
    }


}
