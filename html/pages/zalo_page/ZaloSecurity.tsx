import ToogleSwich from 'components/ToogleSwich';

const ZaloSecurity = () => {
  return (
    <div className="zalo-settings">
      <div className="zalo-settings__section">
        <h2 className="zalo-settings__title">Tài khoản</h2>
        <div className="zalo-settings__item">
          <div className="zalo-settings__label">Đổi số điện thoại</div>
          <div className="zalo-settings__sub">+84346783395</div>
        </div>
        <div className="zalo-settings__item">Lịch sử đăng nhập</div>
        <div className="zalo-settings__item border-none mb-16">Đổi mật khẩu</div>
      </div>

      <div className="zalo-settings__section">
        <h2 className="zalo-settings__title">Bảo mật</h2>
        <div className="zalo-settings__item">Đặt mã khóa Zalo</div>
        <div className="zalo-settings__item">Kiểm tra bảo mật</div>
        <div className="zalo-settings__item ">
          <div className="flex-between">
            <div>Xác thực 2 lớp</div>
            <ToogleSwich />
          </div>
          <div className="zalo-settings__sub">
            Zalo sẽ yêu cầu mã kích hoạt khi tài khoản của bạn được đăng nhập trên thiết bị lạ
          </div>
        </div>
        <div className="zalo-settings__item">Ứng dụng đã cấp quyền</div>
        <div className="zalo-settings__item">Chuyển tài khoản</div>
        <div className="zalo-settings__item">Đăng xuất</div>
        <div className="zalo-settings__item text-danger border-none">Xóa tài khoản</div>
      </div>
    </div>
  );
};

export default ZaloSecurity;
