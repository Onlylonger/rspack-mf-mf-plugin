import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { ctx } from "../../plugin/ctx";

export const UserDetailPage = () => {
  const { state } = useLocation();

  return (
    <div className="">
      <div>detail - {state?.id}</div>
      <Button
        onClick={() => {
          ctx.api.nav("user");
          ctx.api.close("userDetail");
        }}
      >
        Back
      </Button>
    </div>
  );
};
