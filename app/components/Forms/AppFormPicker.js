import React from "react"
import { useFormikContext } from "formik"

import AppPicker from "../AppPicker"
import ErrorMessage from "./ErrorMessage"

function AppFormPicker({ items, name, placeholder }) {
 const { errors, setFieldValue, touched, values, width } = useFormikContext()

 return (
  <>
   <AppPicker
    items={items}
    onSelectItem={(item) => setFieldValue(name, item)}
    placeholder={placeholder}
    selectedItem={values[name]}
    width={width}
   ></AppPicker>
   <ErrorMessage error={errors[name]} visible={touched[name]} />
  </>
 )
}

export default AppFormPicker
