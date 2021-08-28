import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          size="sm"
          variant="secondary"
          style={{height:"42px"}}
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          <img src="https://seeder.finance/images/ic_connected_wallet.svg" alt="atm" style={{verticalAlign:"middle", display:"inline", marginRight:"8px"}} />{accountEllipsis}
        </Button>
      ) : (
        <Button
          size="sm"
          variant="primary"
          style={{height:"42px"}}
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          <img src="https://seeder.finance/images/ic_wallet.svg" alt="atm" style={{verticalAlign:"middle", display:"inline", marginRight:"8px"}} /> Connect to wallet
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
