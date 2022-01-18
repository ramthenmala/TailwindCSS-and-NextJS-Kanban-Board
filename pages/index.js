import Board from "../components/Board";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="p-6">
          <div className="">
            <Board />
          </div>
        </div>
      </Layout>
    </>
  );
}
