import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#626893',
        marginBottom: 10,
        borderRadius: 10,
      },
      itemList: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold'
      },
      statusItemCompleted: {
        color: '#21B95F',
      },
      statusItemPending: {
        color: '#FFC107',
      },
      statusItem:{ 
        fontWeight: 'bold',
        fontSize: 18,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 15,
      }
})