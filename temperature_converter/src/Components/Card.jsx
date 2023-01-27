import React, { useEffect, useState } from 'react'

const Card = () => {

    const [degree, setDegree] = useState('')
    const [answer, setAnswer] = useState('0');
    const [visible, setvisible] = useState('0')
    const onchange = (e) => {
        console.log(e);
        setDegree(e);

    }


    useEffect(() => {

    }, [answer, degree, visible])

    const convert = (v = 1) => {

        console.log(v);

        if (v === '1') {
            setAnswer(eval(degree * 1.8 + 32))
            console.log(answer);

        }
        if (v === '2') {
            setAnswer(eval(degree * 1 + 273))
            console.log(eval((degree * 1) + 273));
        }

    }

    const show = () => {

        setvisible(answer);

    }

    return (
        <div className="container  d-flex justify-content-center">
            <div className="card card_degree shadow-lg border  p-5" style={{ width: "28rem", marginTop: "10rem" }}>

                <div className="content flex">

                    <h4 className='text-center mb-4'>Temperature Converter</h4>
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor="Degree" className="form-label ">Degrees</label>
                            <input type="text" onChange={(e) => { onchange(e.target.value) }} className="form-control" />
                        </div>
                        <div className='col'>
                            <label htmlFor="Type" className="form-label">Type</label>
                            <select name="select" onClick={e => { convert(e.target.value) }} id="select" className="form-select">
                                <option defaultValue value="0">Select</option>
                                <option defaultValue="1" value="1">Fahrenite</option>
                                <option value="2"  >Kelvin</option>

                            </select>
                        </div>

                    </div>
                    <hr />
                    <div className='w-100'>
                        <label htmlFor="Result" className="form-label">Result</label>
                        <div className="card p-2 text-dark">{visible}</div>
                    </div>

                </div>
                <button className="btn btn-primary btn-lg mt-3" onClick={show}>Convert</button>
            </div>
        </div>
    )
}

export default Card