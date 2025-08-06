import { UserPage } from "../pages/user/User";
import { ctx } from "./ctx";
import { UserDetailPage } from "../pages/user/UserDetail";

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
          id: "APS-Goup1-id",
          label: "APS-Goup1-label",
          children: [
            {
              id: "APS-item1-id",
              label: "APS-plugin-page1",
              peerRouteId: Route.item1,
            },
            {
              id: "APS-external-id",
              label: "APS-external-label",
              externalUrl: "https://baidu.com",
            },
          ],
        },
        {
          id: "APS-item2-id",
          label: "APS-plugin-page2",
          peerRouteId: Route.item2,
        },
        {
          id: "APS-user-id",
          label: "User List",
          peerRouteId: Route.user,
        },
        {
          id: "APS-user-detail-id",
          label: "User Detail",
          peerRouteId: Route.userDetail,
          hidden: true,
        },
      ];
    },
  };
}
