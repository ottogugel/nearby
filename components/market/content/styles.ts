import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  details: {
    marginTop: 20,
  },
  detailsText: {
    fontSize: 14,
    marginTop: 5,
    color: colors.gray[500],
  },
  ticket: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.red.light,
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  ticketText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginLeft: 5,
  },
});
