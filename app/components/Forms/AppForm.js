import React from "react"
import { Formik } from "formik"

function AppForm({ initailValues, onSubmit, validationSchema, children }) {
 return (
  <Formik
   initialValues={initailValues}
   onSubmit={onSubmit}
   validationSchema={validationSchema}
  >
   {() => <>{children}</>}
  </Formik>
 )
}

export default AppForm
