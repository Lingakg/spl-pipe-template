export default function BasicPipe(context: any, option: any){
  return (next: Function) => {
    console.log(context, option)
    setTimeout(next, 5000)
  }
}

