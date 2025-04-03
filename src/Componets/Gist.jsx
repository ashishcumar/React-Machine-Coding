export default function Gist() {
  const gistId = "e93fca8e2d07421998f273efbd428a65";
  const gistUrl = `https://gist.github.com/ashishcumar/${gistId}.pibb`;

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <iframe
        title="Gist"
        src={gistUrl}
        width="100%"
        height="300px"
        frameBorder="0"
        sandbox="allow-scripts allow-same-origin"
        style={{ border: "1px solid grey", marginTop: "10px" }}
      ></iframe>
    </div>
  );
}
