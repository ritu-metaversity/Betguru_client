/* eslint-disable react-hooks/exhaustive-deps */
import { styled } from "@mui/material/styles";
import { Box, Typography, Container, Modal, backdropClasses } from "@mui/material";
import ArrowCircleDown from "../../Img/ArrowCircleDown.png";
import ArrowCircleUp from "../../Img/ArrowCircleUp.png";
import { Link } from "react-router-dom";
import "./Ledger.scss";
import walletImg from "../../Img/wallet 1.png";
import { useEffect, useState } from "react";
import ModalsContent from "./ModalsContent";
import {
  useGetLedgerBetDetailsMutation,
  useGetLedgerDetailsMutation,
} from "../../store/service/userServices/userServices";
import moment from "moment";
import Loder from "../../component/LoadingSpinner/Loder";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  boxShadow: 24,
};

// Styled components
const LedgerContainer = styled(Box)({
  paddingTop: "30px",
  backgroundColor: "#f1f0f5",
});

const Header = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "16px",
});

const WalletBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

const MyLedger = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const [trigger, { data: ledgerData }] = useGetLedgerDetailsMutation();
  const [betTrigger, { data: ledgerBetData, isLoading }] = useGetLedgerBetDetailsMutation();

  const handleOpen = (matchId: number | undefined) => {
    setOpen(true);
    betTrigger({
      matchId: matchId ?? 0,
    });
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    trigger({});
  }, [trigger]);

  // Calculate the current entries
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ledgerData?.data?.slice(indexOfFirstItem, indexOfLastItem) || [];

  const handlePageChange = (pageNumber: number) => {
    console.log(`Changing to page ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil((ledgerData?.data?.length || 0) / itemsPerPage);

  return (
    <LedgerContainer>
      <Box>
        <Header sx={{
          pl: 4,
          pr:4
        }}>
          <Typography
            variant="h3"
            className="mobileHide"
            sx={{ fontFamily: "Bebas Neue", fontWeight: 700, fontSize: "28px" }}
          >
            MY LEDGER
          </Typography>
          <WalletBox>
            <div className="wallet_ledger">
              <img className="wallet-img" src={walletImg} alt="wallet images" />
              <Typography component="p">{currentItems[0]?.balance}</Typography>
            </div>
          </WalletBox>
        </Header>
        <Box className="ledger_data">
          <div className="tableDiv">
            <table className="table table-striped mobs-view-hide">
              <thead>
                <tr style={{ background: "transparent" }}>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Remark</th>
                  <th scope="col">Won By</th>
                  <th scope="col">Won</th>
                  <th scope="col">Lost</th>
                  <th scope="col">Balance</th>
                </tr>
              </thead>
              <tbody className="ledger_body">
                {currentItems.map((data, index) => (
                  <tr
                    key={index} // Use index as key since matchId might not be unique in slice
                    className="ng-star-inserted"
                    onClick={() => handleOpen(data?.matchId)}
                  >
                    <td>
                      <img
                        className="position-image"
                        src={Number(data?.won) !== 0 ? ArrowCircleUp : ArrowCircleDown}
                        alt=""
                      />
                      {data?.date}
                    </td>
                    <td>{moment(data?.time, "HH:mm:ss").format("hh:mm A")}</td>
                    <td style={{ width: "200px" }}>{data?.remark}</td>
                    <td>{data?.wonBy}</td>
                    <td>{data?.won}</td>
                    <td>{data?.lost}</td>
                    <td>{data?.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {totalPages > 0 && (
              <div className="pagination_ledger">
                <ul className="pagination">
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}  >
                    <button
                      className="page-link"
                      aria-label="First"
                      onClick={() => handlePageChange(1)}
                      disabled={currentPage === 1}
                    >
                      <span aria-hidden="true">««</span>
                    </button>
                  </li>

                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <span aria-hidden="true">«</span>
                    </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index + 1}
                      className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                      
                    >
                      <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                    </li>
                  ))}

                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`} >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <span aria-hidden="true">»</span>
                    </button>
                  </li>

                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`} >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(totalPages)}
                      disabled={currentPage === totalPages}
                    >
                      <span aria-hidden="true">»»</span>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="width_increse">
          {
            isLoading ? <Loder /> : <ModalsContent handleClose={handleClose} data={ledgerBetData?.data} />
          }
          
        </Box>
      </Modal>
    </LedgerContainer>
  );
};

export default MyLedger;
