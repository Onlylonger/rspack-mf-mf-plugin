import { UserPage } from "../pages/user/User";
import { ctx } from "./ctx";
import { UserDetailPage } from "../pages/user/UserDetail";
import InboxIcon from "@mui/icons-material/MoveToInbox";

const Route = {
  item1: "item1",
  item2: "item2",
  user: "user",
  userDetail: "userDetail",
};

export default function createMF(params: any) {
  ctx.api = params;

  return {
    createRoutes() {
      return {
        [Route.item1]: {
          handler() {
            return "plugin-page-item1";
          },
        },
        [Route.item2]: {
          handler() {
            return "plugin-page-item2";
          },
        },
        [Route.user]: {
          handler() {
            return <UserPage />;
          },
        },
        [Route.userDetail]: {
          handler() {
            return <UserDetailPage />;
          },
        },
      };
    },
    createMenus() {
      return [
        {
          id: "plugin-a-goup1-id",
          label: "plugin-a-goup1-label",
          icon: <InboxIcon />,
          children: [
            {
              id: "plugin-a-item1-id",
              label: "plugin-a-plugin-page1",
              peerRouteId: Route.item1,
              icon: <InboxIcon />,
            },
            {
              id: "plugin-a-external-id",
              label: "plugin-a Bing search",
              externalUrl: "https://bing.com",
              icon: <InboxIcon />,
            },
          ],
        },
        {
          id: "plugin-a-item2-id",
          label: "plugin-a-plugin-page2",
          peerRouteId: Route.item2,
          icon: <InboxIcon />,
        },
        {
          id: "plugin-a-user-id",
          label: "User List",
          peerRouteId: Route.user,
          icon: <InboxIcon />,
        },
        {
          id: "plugin-a-user-detail-id",
          label: "User Detail",
          peerRouteId: Route.userDetail,
          hidden: true,
        },
      ];
    },
  };
}
