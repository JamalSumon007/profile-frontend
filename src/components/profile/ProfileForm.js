import { Formik } from "formik"
import axios from 'axios';

const ProfileForm = () => {
    const postData = async (value) => {
        const data = await axios.post("http://localhost:9091/api/v1/profiles", value);
        return data;
    }

    return (
        <Formik
            initialValues={{ name: '', designation: '', address: '' }}
        
            onSubmit={async (values, { setSubmitting }) => {
                console.log(values)
                const data = await postData(values);
                    
                console.log(data)
                setTimeout(() => {
                //alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
        >

            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form 
                    style={{
                        display: "flex", 
                        flexDirection: "column", 
                        gap: "10px", 
                        width: "250px", 
                        margin: "0 auto"
                    }} 
                    onSubmit={handleSubmit}
                >
                    <input
                        type="name" name="name" placeholder='Enter your name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    
                    <input
                        type="designation" name="designation" placeholder='Enter your designation'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.designation}
                    />

                    <input
                        type="address" name="address" placeholder='Enter your address'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                    />
                    
                    <button type="submit" disabled={isSubmitting}> Submit </button>
                </form>
            )}
        </Formik>
    )
}

export default ProfileForm;