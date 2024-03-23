import { MessageModal } from "../../components/modal"

export function Error({ error }: { error: string }) {
  return (
    <MessageModal message={error} visible onClose={() => { }} />
  )
}
