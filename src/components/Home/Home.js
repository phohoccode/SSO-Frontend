function Home() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center mb-4">SSO - Single Sign On</h1>
                        <p>
                            SSO (Single Sign On) là hình thức đăng nhập tập trung được sử dụng rất phổ biến hiện nay. Các nội dung trọng tâm của khóa học có thể kể đến như:
                        </p>
                        <ul>
                            <li>
                                Hiểu rõ cách đăng nhập/đăng xuất người dùng với Node.JS, thông qua việc xác thực người dùng với Passport. Sử dụng Passport giúp tối ưu hóa quá trình xử lý và đảm bảo an toàn thông tin, đồng thời hỗ trợ kiểm tra trạng thái người dùng qua "session" và "cookies".
                            </li>
                            <li>
                                Thực hành sử dụng Passport với các strategies: Local, Facebook và Google. Học cách đăng nhập người dùng qua local, tài khoản Facebook, và tài khoản Google.
                            </li>
                            <li>
                                Triển khai mô hình SSO với React và Node.JS. Ở đây, React đóng vai trò là client, và server SSO Node.js quản lý đăng nhập người dùng. Server trao đổi với client thông qua xác thực JWT (JSON Web Token).
                            </li>
                        </ul>
                        <p>
                            Mục tiêu của khóa học là mang đến một góc nhìn thực tế về quản lý người dùng. Khóa học hy vọng sẽ giúp bạn chuẩn bị hành trang tốt nhất trên con đường trở thành fullstack developer toàn diện.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;