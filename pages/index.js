import Board from "../components/Board";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="p-5">
          <Board />
        </div>
      </Layout>
    </>
  );
}
