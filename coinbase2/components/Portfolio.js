import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import styled from "styled-components";
import { coins } from "../static/coins";
import Coin from "./Coin";
import BalanceChart from "./BalanceChart";
import { ThirdwebSDK } from "@3rdweb/sdk";

const Portfolio = ({ thirdWebTokens, sanityTokens, walletAddress }) => {
  // console.log(sanityTokens, "loll");
  // console.log(thirdWebTokens, "loll");
  // console.log(walletAddress, "loll");

  // thirdWebTokens[0]
  //   .balanceOf(walletAddress)
  //   .then((balance) => console.log(Number(balance.displayValue) * 3100));

  //converting all of my token values into a corresponding USD value

  const [walletBalance, setWalletBalance] = useState(0);

  const tokenToUSD = {};
  for (const token of sanityTokens) {
    tokenToUSD[token.contractAddress] = Number(token.usdPrice);
  }

  useEffect(() => {
    const calculateTotalBalance = async () => {
      const totalBalance = await Promise.all(
        thirdWebTokens.map(async (token) => {
          const balance = await token.balanceOf(walletAddress);
          return Number(balance.displayValue) * tokenToUSD[token.address];
        })
      );
      console.log(totalBalance, "total balance");
      setWalletBalance(totalBalance.reduce((acc, curr) => acc + curr, 0));
    };
    return calculateTotalBalance();
  }, [thirdWebTokens, sanityTokens]);

  return (
    <Wrapper>
      {" "}
      <Content>
        <Chart>
          <div>
            <Balance>
              <BalanceTitle>Portfolio balance</BalanceTitle>
              <BalanceValue>
                {"$"}
                {walletBalance.toLocaleString()}
                {/* 46,000 */}
              </BalanceValue>
            </Balance>
          </div>
          <BalanceChart />
        </Chart>

        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <div style={{ flex: 3 }}>Name</div>
                <div style={{ flex: 2 }}>Balance</div>
                <div style={{ flex: 1 }}>Price</div>
                <div style={{ flex: 1 }}>Allocation</div>
                <div style={{ flex: 0 }}>
                  <BsThreeDotsVertical />
                </div>
              </TableRow>
            </TableItem>
            <Divider />
            <div>
              {coins.map((coin) => (
                <div>
                  <Coin coin={coin} />

                  <Divider />
                </div>
              ))}
            </div>
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  );
};
export default Portfolio;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1500px;
  padding: 2rem 1rem;
`;

const Chart = styled.div`
  border: 1px solid #282b2f;
`;

const Balance = styled.div``;

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`;
const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`;

const Table = styled.table`
  width: 100%;
`;

const TableRow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > th {
    text-align: left;
  }
`;

const TableItem = styled.div`
  padding: 1rem 2rem;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
