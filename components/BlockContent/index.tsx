import Cookies from "js-cookie"
import { useEffect, useState } from "react"

const BlockContent = () => {

  const [password, setPassword] = useState('')
  const [access, setAccess] = useState(false)

  useEffect(() => {
    setAccess(!!Cookies.get("access"))
  }, [])

  const submit = () => {
    if(password === 'W!Z$np*^9EtU') {
      Cookies.set("access", "234r523")
      setAccess(true)
    }
  }

  return (
    <div className={access ? "uk-hidden" : "block-content"}>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={() => submit()}>Войти</button>
    </div>
  )
}

export default BlockContent