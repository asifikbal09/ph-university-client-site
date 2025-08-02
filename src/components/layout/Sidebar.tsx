import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";
import { adminPath } from "../../router/admin.routes";
import { facultyPath } from "../../router/faculty.routes";
import { studentPath } from "../../router/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";

const { Sider } = Layout;

const userRole = {
    ADMIN:"admin",
    FACULTY:"faculty",
    STUDENT:"student"
}

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser)
    let sidebarItems;

    switch (user!.role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemGenerator(adminPath, "admin")
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemGenerator(facultyPath, "faculty")
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemGenerator(studentPath, "student")
            break;
        
        default:
            break;
    }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        className="demo-logo-vertical"
        style={{
          color: "white",
          fontWeight: "bold",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH UNI</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};
export default Sidebar;
