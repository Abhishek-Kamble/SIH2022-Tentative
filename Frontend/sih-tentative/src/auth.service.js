class AuthService {
    

    logout() {
        localStorage.removeItem("token");
        
        localStorage.removeItem("id");
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