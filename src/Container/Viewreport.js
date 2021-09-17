import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function CheckoutPage() {

    const [data, setdata] = useState([]);
    const [subtotal, setSubtotal] = useState([])
    const [promoError, setPromoError] = useState("")
    const [promoCode, setPromoCode] = useState("")
    const [promoPercent, setPromoPercent] = useState("")
    const [grandTotal, setGrandTotal] = useState("")
    const [hasEnteredPromo, setHasEnteredPromo] = useState(false)
    
    const successnotify = () => toast.error("!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    useEffect(() => {
        let config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        axios.get(`${process.env.REACT_APP_BASE_URI}/get/default_buycart`, config)
            .then((response) => {
                // if (response.data.data.status == "default") {
                    setdata(response.data.data.order)
                    setGrandTotal(response.data.data.grandTotal)
                // }
                // setdata(response.data.data.order)
                // calculateSubTotal(response.data.data.grandTotal)
                // response.data.data.map(val => { 
                //     calculateSubTotal(val.product.buy_price, val.quantity)
                // })
                console.log(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
        [])

    // function calculateSubTotal(price, quantity) { 
    //     var subtotall = price * quantity;  
    //     setSubtotal(old => [...old, subtotall])
    // }

    // function calculateTotal() {
    //     var total = 0; 
    //      subtotal.map((value) => {
    //         total = total + parseInt(value); 
    //     })
    //     console.log(data.grandTotal)

    //     setGrandTotal(data.grandTotal)
    // }

    useEffect(() => {
        console.log(subtotal)
        // calculateTotal()
    }, [subtotal])

    const checkout = () => {
        let config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        axios.put(`${process.env.REACT_APP_BASE_URI}/update/default_to_pending`,{},config)
            .then((response) => {
                successnotify()
                setTimeout(() => {
                    window.location.href = "/order"
                }, 1000)
                // setdata(response.data.data)
                // console.log(response.data.data)

            })
            .catch((err) => {
                console.log(err)
            })

    }

    const calculateTotalAfterPromo = () => {

        if (promoPercent !== "") {
            let promoTotal = grandTotal - (grandTotal * (parseInt(promoPercent) / 100))

            setGrandTotal(promoTotal)
        }
    }

    const checkPromoCode = () => {
        let config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }

        axios.post(`${process.env.REACT_APP_BASE_URI}/checkpromocode`, {

            code: promoCode
        }, config).then((response) => {
            if (response.data.success) {
                setPromoError("")
                if (response.data.data.active) {
                    setPromoPercent(response.data.percent)

                    setHasEnteredPromo(true)
                } else {
                    setPromoError("Promo Code Not Active!!")
                }
            } else {
                setPromoError("!!")
            }
        })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        calculateTotalAfterPromo()
    }, [promoPercent])


    return (
        <div class="d-flex justify-content-center h-100">
        <div className="checkout">
            
            <table className="table table-borderless">
                <thead>
                    <tr>
                       <h1>Lab Report</h1>
                       

                    </tr>
                </thead>

                <tbody>{

                    data.length > 0 && data.map((p, index) => (
                        <tr>
                            <td>{p.patientname}</td>
                         

                        </tr>

                    ))
                }</tbody>
            </table>


            <table className=" table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Patient Name: Nikita Ojha</th>
                        <th cope="col">Age: 21</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="col">Sex: Female</th>
                        <th cope="col">Age: 21</th>
                    </tr>
                    <tr>
                        <th scope="row">Addres: Mid Baneshwor</th>
                        <td>Date: 2021/9/13</td>
                    </tr>

                    <tr>
                        <th scope="row">Patient Id: 78008024</th>
                        <td>Referred by: DR. Abc</td>
                        
                            
                       
                    </tr>

                   

                    <tr>
                        <th scope="row">Referred by: Venus Hospital</th>
                        <td>Sample No: 20178-N34410</td>
                    </tr>




                </tbody>
            </table>
            <br></br>
            <br></br>
            <br></br>
        

            <div className="srepoty">
                <div className="repo">
                    <div>
                        <h3> HAEMATOLOGY REPORT</h3>
                    </div>
                    <table className="table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Test</th>
                        <th cope="col">Result</th>
                        <th cope="col">Normal Range</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="col">Total Leucocye Count</th>
                        <th cope="col">4,460 /cmm</th>
                        <th cope="col">(4,000 - 11,000) /cmm</th>   
                    </tr>

                </tbody>
                <tbody>
                    <tr>
                    <th scope="col">Different Count</th>
                         
                    </tr>

                </tbody>

                <tbody>
                    <tr>
                    <th scope="col">Neutrophils</th>
                        <th cope="col">82%</th>
                        <th cope="col">(40 - 75) %</th>   
                    </tr>

                </tbody>

                <tbody>
                    <tr>
                    <th scope="col">Lymphocytes</th>
                        <th cope="col">15%</th>
                        <th cope="col">(20 - 50) %</th>   
                    </tr>

                </tbody>
                <tbody>
                    <tr>
                    <th scope="col">Monocytes</th>
                        <th cope="col">02%</th>
                        <th cope="col">(2 - 10) %</th>   
                    </tr>

                </tbody>
                <tbody>
                    <tr>
                    <th scope="col">Eosinophils</th>
                        <th cope="col">01%</th>
                        <th cope="col">(1 - 6) %</th>   
                    </tr>

                </tbody>
                <tbody>
                    <tr>
                    <th scope="col">Eosinophils</th>
                        <th cope="col">01%</th>
                        <th cope="col">(1 - 6) %</th>   
                    </tr>

                </tbody>
                <tbody>
                    <tr>
                    <th scope="col">Basophils</th>
                        <th cope="col">00%</th>
                        <th cope="col">(0 - 1) %</th>   
                    </tr>

                </tbody>
            </table>
            <br></br>
            <br></br>
            <br></br>
                    
                </div>
            </div>





            <div className="srepoty">
                <div className="repo">
                    <div>
                        <h3>CLINICAL CHEMISTRY REPORT</h3>
                    </div>
                    <table className="table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Test</th>
                        <th cope="col">Result</th>
                        <th cope="col">Normal Range</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="col">Sugar Random </th>
                        <th cope="col">95.0 mg/dl</th>
                        <th cope="col">(70 - 140) mg/dl</th>   
                    </tr>

                </tbody>
                <tbody>
                    <tr>
                    <th scope="col">Renal Function(RFT)</th>
                         
                    </tr>

                </tbody>

                <tbody>
                    <tr>
                    <th scope="col">Urea</th>
                        <th cope="col">16.8 mg/dl</th>
                        <th cope="col">(13.0 - 1.4) mg/dl</th>   
                    </tr>

                </tbody>

                <tbody>
                    <tr>
                    <th scope="col">Creatinine</th>
                        <th cope="col">0.6 mg/dl</th>
                        <th cope="col">(0.4 - 1.4)mg/dl</th>   
                    </tr>

                </tbody>
                <tbody>
                    <tr>
                    <th scope="col">Sodium</th>
                        <th cope="col">136.0M Eq/l</th>
                        <th cope="col">(134.0 - 146.0) M Eq-l</th>   
                    </tr>

                </tbody>
                <tbody>
                    <tr>
                    <th scope="col">Potassium</th>
                        <th cope="col">4.2 M Eq/l</th>
                        <th cope="col">(36 - 5.5)M Eq/l</th>   
                    </tr>

                </tbody>
               
            </table>
            <br></br>
            <br></br>
            <br></br>
                    
                </div>
            </div>




            <div className="srepoty">
                <div className="repo">
                    <div>
                        <h3>  SEROLOGY REPORT</h3>
                    </div>
                    <table className="table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Test</th>
                        
                        <th cope="col">Result</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="col">c-Reactive Protin(CRP)</th>
                        <th cope="col">3.90</th>
                
                        <th cope="col">Mg/l</th>
                        <br></br><br></br>
                        <th cope="col">0.0-6.0</th>
                    </tr>

                </tbody>
            </table>
            <br></br>
            <br></br>
            <br></br>
                    
                </div>
            </div>

          
                   

    
            <div>
                <button type="button" className="btn btn-primary btn-lg"> Print Report </button>
            </div>

            <ToastContainer />
        </div>
        </div>
    )
}

export default CheckoutPage