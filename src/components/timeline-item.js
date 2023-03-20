export default function TimelineItem(props) {
  return (
    <>
      <div className="flex flex-row justify-between text-lg">
        <div className="w-full p-5"><h2 className="font-bold text-right">{props.when}</h2></div>
        <div className="rounded-full w-6 h-3 bg-white my-auto mx-auto"></div>
        <div className="w-full p-5"><h2 className="text-left">{props.children}</h2></div>
      </div>
    </>
  );
}