import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/font-family"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    flexDirection: 'row',
  },
  details: {
    flex: 1,
    marginLeft: 12,
    marginTop: 2,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600]
  },
  description: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 14
  }
})