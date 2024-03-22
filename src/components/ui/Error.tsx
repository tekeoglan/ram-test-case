import MessageModal from "../MessageModal"

export default function Error({ error }: { error: string }) {
  return (
    <MessageModal message={error} />
  )
}
