export default function Index() {
  const height = window.innerHeight;
  const width = window.innerWidth;

  return (
    <div>
      {
        if(window){
          <div>
            width: {width}
            height: {height}
          </div>
        }
      }
    </div>
  );
}