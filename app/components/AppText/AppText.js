import { Text, StyleSheet, Platform } from "react-native"
import React from "react"

import styles from "./styles"

export default function AppText({ children }) {
 return <Text style={styles.Text}>{children}</Text>
}
