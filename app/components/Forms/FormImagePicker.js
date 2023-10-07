import React from "react"
import { useFormikContext } from "formik"

import ImageInputList from "../ImageInputList"
import ErrorMessage from "./ErrorMessage"

function FormImagePicker({ name }) {
 const { setFieldTouched, handleChange, errors, touched } = useFormikContext()
 const imageUris = values[name]

 //  Add Image
 const handleAdd = (uri) => {
  setFieldValue(name, [...imageUris, uri])
 }

 //  Remove Image
 const handleRemove = (uri) => {
  setFieldValue(
   name,
   imageUris.filter((imageUri) => imageUri !== uri)
  )
 }

 return (
  <>
   <ImageInputList
    imageUris={imageUris}
    onAddImage={handleAdd}
    onRemoveImage={handleRemove}
   />
   <ErrorMessage error={errors[name]} visible={touched[name]} />
  </>
 )
}

export default FormImagePicker
