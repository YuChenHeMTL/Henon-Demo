import React, { useState } from "react"
import Selector from "./Selector"
import styles from "../page.module.css"

export default function Input(props) {
    const [platform, setPlatform] = useState("")
    const choices = Object.keys(props.data).map((key) => {
        return props.data[key].name})

    function handleSelect(event) {
        setPlatform(event.target.text)
        props.handleSelect(event.target.text)
    }

    const [data, setData] = useState({})

    function handleChange(event) {
        setData({
            destination: platform,
            ...data,
            [event.target.ariaLabel]: event.target.value
        })
    }

    return (
        <div className={styles.inputWrap}>
            <Selector choices={choices} handleSelect={handleSelect} />
            {platform && (
                <form className={styles.formWrap}>
                    <h2>{props.data[platform].name}</h2>
                    {props.data[platform].fields.map((field) => {
                        return (
                            <div className={`form-group ${styles.inputItem}`} key={field.name}>
                                <label>{field.name}</label>
                                <input aria-label={field.label} type={field.type} className={`form-control ${styles.inputText}`} placeholder={`Enter ` + field.name} onChange={handleChange}/>
                            </div>
                        )
                    })}
                    <button type="submit" className={`btn btn-primary ${styles.submit}`} onClick={(event) => props.handleSubmit(event, data)}>Submit</button>
                </form>
            )}
        </div>
        
    )
}