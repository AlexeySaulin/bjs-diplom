const logout = new LogoutButton();
logout.action = () => {
    ApiConnector.logout(response => {
        if (response.success) {
            location.reload();
        }
    });
};
ApiConnector.current(response => {
    if (response.success) {
        ProfileWidget.showProfile(response.data)
    }
});
