export default function MyButton({text,style,onclick}) {
  return <button className={`p-2 ${style}`} onClick={onclick}>{text}</button>;
}
