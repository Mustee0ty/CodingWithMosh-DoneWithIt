import React from "react"
import { StyleSheet } from "react-native"
import * as Yup from "yup"

import { AppForm, AppFormField, SubmitButton } from "../components/Forms"
import Screen from "../components/Screen"
import AppFormPicker from "../components/Forms/AppFormPicker"
import CategoryPickerItem from "../components/CategoryPickerItem"
import FormImagePicker from "../components/Forms/FormImagePicker"
import useLocation from "../hooks/useLocation"

const validationSchema = Yup.object().shape({
 title: Yup.string().required().min(1).label("Title"),
 price: Yup.number().required().min(1).max(1000).label("price"),
 description: Yup.string().label("Description"),
 category: Yup.object().required().nullable().label("Category"),
 images: Yup.array().min(1, "Please select atleast one image"),
})

const categories = [
 { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
 { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
 { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
]

function ListingEditScreen(props) {
 const location = useLocation()

 return (
  <Screen style={styles.container}>
   <AppForm
    initailValues={{
     title: "",
     price: "",
     description: "",
     category: null,
     images: [],
    }}
    onSubmit={(values) => console.log(location)}
    validationSchema={validationSchema}
   >
    <FormImagePicker name="images" />
    <AppFormField maxLength={255} name="title" placeholder="Title" />
    <AppFormField
     KeyboardType="numeric"
     maxLength={8}
     name="price"
     placeholder="Price"
    />
    <AppFormPicker
     items={categories}
     name="category"
     numberOfColumns={3}
     PickerItemComponent={CategoryPickerItem}
     placeholder="Category"
     width="50%"
    />
    <AppFormField
     maxLength={255}
     multiline
     name="description"
     numberOfLines={3}
     placeholder="Description"
    />
    <SubmitButton title="Post" />
   </AppForm>
  </Screen>
 )
}

const styles = StyleSheet.create({})

export default ListingEditScreen
