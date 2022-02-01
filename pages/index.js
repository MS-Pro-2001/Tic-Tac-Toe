import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Board from "./api/Board";

export default function Home() {
  return (
    <>
    <h1 className="text-center" >Tic Tac Toe</h1>
      <Board />
      
    </>
  );
}
