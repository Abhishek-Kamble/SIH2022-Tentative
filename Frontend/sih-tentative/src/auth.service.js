class AuthService {
    

    logout() {
        localStorage.removeItem("token");
        
        localStorage.removeItem("id");
        localStorage.removeItem("role");
        window.location = '/'
    }
    
    getCurrentId() {
        return localStorage.getItem('id');
    }
    getCurrentToken() {
        return localStorage.getItem('token');
    }
}

export default new AuthService();