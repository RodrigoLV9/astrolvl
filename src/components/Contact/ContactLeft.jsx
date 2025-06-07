import { BsFillSendFill as SendIcon } from "react-icons/bs";
import '../../styles/contactLeft.css'
import {useState, useEffect, useRef} from 'react'
import { useForm } from "react-hook-form"
import {SchemaContact} from '../../validations/SchemaContact.js'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaCheck as CheckIcon } from "react-icons/fa";
import { MdErrorOutline as ErrorIcon } from "react-icons/md";
export const ContactLeft=()=>{
    const [error,setError]=useState(undefined)
    const [isSubmitted, setIsSubmitted]=useState(false)
    const formRef=useRef(null)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(SchemaContact())
    });
    useEffect(()=>{
        setError({ 
            name:errors.name?.message,
            email:errors.email?.message,
            message:errors.message?.message
        })
        if(errors.name || errors.email || errors.message){
            setIsSubmitted(false)
        }
    },[errors])
    const onSubmit=()=>{
        setIsSubmitted(true)
        formRef.current?.submit()
    }
    return(
        <div className="contactLeft">
            <h3>Enviame un mensaje</h3>
            <form action="https://formsubmit.co/1a06afc0ad94bc52c001a987e5558770" method="POST" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                <div className="form__group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" required {...register('name')}/>
                    {errors.name && (
                        <span className='errorMessage'>
                          <ErrorIcon className="errorMessage__icon"/>
                          <p>{error?.name}</p>
                        </span>
                    )}
                </div>
                <div className="form__group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required {...register('email')}/>
                    {errors.email && (
                        <span className='errorMessage'>
                          <ErrorIcon className="errorMessage__icon"/>
                          <p>{error?.email}</p>
                        </span>
                    )}
                </div>
                <div className="form__group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" required {...register('message')} ></textarea>
                    {errors.message && (
                        <span className='errorMessage'>
                          <ErrorIcon className="errorMessage__icon"/>
                          <p>{error?.message}</p>
                        </span>
                    )}
                </div>
                <button className='formButton' type="submit" id='button'>
                    <p>Send</p>
                    <SendIcon className='formButton__icon'/>
                </button>
                <input type="hidden" name="_captcha" value="false"/>
            </form>
        </div> 
    )
}