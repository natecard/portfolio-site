export default function Header() {
  return (
    <div className="h-36 bg-blueBlue">
      <div className="flex flex-row items-center">
        <h1 className="pl-24 mr-auto text-6xl py-9 text-whiteish">
          Nathan Card
        </h1>
        <svg
          className="p-2 mr-24 bg-whiteish"
          viewBox="0 0 100 80"
          width="60"
          height="60"
        >
          <rect
            className="fill-blueBlue"
            width="100"
            height="5"
          ></rect>
          <rect
            className="fill-blueBlue"
            y="35"
            width="100"
            height="5"
          ></rect>
          <rect
            className="fill-blueBlue"
            y="70"
            width="100"
            height="5"
          ></rect>
        </svg>
      </div>
    </div>
  );
}
