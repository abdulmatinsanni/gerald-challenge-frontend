import React, { useLayoutEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
// import { signUpRequest } from 'state/slices/account'
import { Field, Form, Formik } from 'formik'
import produce from 'immer'
// import { toast } from 'react-toastify'
import TextInput from '../../shared/forms/TextInput'
import Button from '../../shared/forms/Button'
import { useAppDispatch } from '../../../hooks'

const Register: React.FC<RouteComponentProps> = ({ history }) => {
  // const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    document.title = 'Gerald - Sign Up'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [state, setState] = useState({
    isCreatingLoading: false,
  })

  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  }

  const validationSchema = yup.object().shape({
    fullName: yup.string().label('Full name').required(),
    lastName: yup.string().label('Last name').required(),
    email: yup.string().label('Email').email().required(),
    phoneNumber: yup.string().label('Password').required(),
    password: yup.string().label('Phone number').required(),
  })

  const handleRegister = async (formValues: any) => {
    const formPayload = {
      firstname: formValues.fullName,
      lastname: formValues.lastName,
      email: formValues.email,
      phone: formValues.phoneNumber,
      password: formValues.password,
    }

    setState(
      produce((draft) => {
        draft.isCreatingLoading = true
      })
    )

    // const resultAction = await dispatch(signUpRequest(formPayload))
    //
    // if (signUpRequest.fulfilled.match(resultAction)) {
    //   setState(
    //     produce((draft) => {
    //       draft.isCreatingLoading = false
    //     })
    //   )
    //
    //   history.replace(
    //     `/auth/confirm-otp?email=${encodeURIComponent(formValues.email)}`
    //   )
    // } else {
    //   setState(
    //     produce((draft) => {
    //       draft.isCreatingLoading = false
    //     })
    //   )
    //
    //   toast.error(
    //     resultAction.payload?.message ||
    //       resultAction.error?.message ||
    //       'An error occurred, please try again.'
    //   )
    // }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 justify-start md:justify-center items-center font-nunito-sans">
      <div className="flex flex-col w-full p-3 md:p-0 md:w-2/3 lg:w-1/3 mt-10 md:mt-16 mb-16 md:mb-10">
        <div className="p-6 md:p-10 bg-white shadow rounded-xl mt-5">
          <h1 className="text-gray-900 text-lg font-bold">
            User's Registration
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            {({ handleSubmit, isValid }) => {
              return (
                <Form className="mt-5" onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <label
                      htmlFor="fullName"
                      className="text-sm text-gray-600 font-semibold"
                    >
                      Full Name
                    </label>
                    <Field
                      component={TextInput}
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Full name"
                    />
                  </div>

                  <div className="flex flex-col mt-5">
                    <label
                      htmlFor="email"
                      className="text-sm text-gray-600 font-semibold"
                    >
                      Email Address
                    </label>
                    <Field
                      component={TextInput}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="user@email.com"
                    />
                  </div>

                  <div className="flex flex-col mt-5">
                    <label
                      htmlFor="lastName"
                      className="text-sm text-gray-600 font-semibold"
                    >
                      Phone number
                    </label>
                    <Field
                      component={TextInput}
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Phone number"
                    />
                  </div>

                  <div className="flex flex-col mt-5">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 font-semibold"
                    >
                      Password
                    </label>
                    <Field
                      component={TextInput}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                  </div>

                  <div className="flex flex-col mt-10">
                    <Button
                      type="submit"
                      title="Create Account"
                      loadingTitle="Creating Account..."
                      variant="primary"
                      loading={state.isCreatingLoading}
                      disabled={!isValid}
                    />
                  </div>
                </Form>
              )
            }}
          </Formik>

          <div className="flex flex-row pt-5 justify-center">
            <span className="text-gray-600 text-sm">
              Are you an existing customer?{' '}
              <Link
                to="/auth/login"
                className="text-teal-400 hover:text-teal-500 transition ease-in-out duration-300"
              >
                SIGN IN
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
