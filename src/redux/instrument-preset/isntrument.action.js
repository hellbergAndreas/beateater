export const sendSlotInfoToStore = (slotInfo) => ({
  type: "SEND_SLOT_INFO",
  payload: slotInfo,
})
export const removeSlotFromStore = (slotName) => ({
  type: "REMOVE_SLOT_INFO",
  payload: slotName,
})
