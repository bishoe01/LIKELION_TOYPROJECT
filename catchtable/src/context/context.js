import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState([
        {
            username: "user1",
            password: "1234"
        },
        {
            username: "user2",
            password: "1234"
        },
        {
            username: "user3",
            password: "1234"
        },
        {
            username: "user4",
            password: "1234"
        },
        {
            username: "user5",
            password: "1234"
        },
    ]);

    const [isLogin, setIsLogin] = useState(false);
    const [placeData, setPlaceData] = useState([
        { title: '투파인드피터', image: "../images/place_ToFindPeter.jpg", price: "평균 18,000", review: "121", star: 4.5, detail: "다양하고 가성비 높은 파스타, 스테이크, 필라프, 음료로 유명한 레스토랑입니다.", reserve: false},
        { title: '한우궁', image: "../images/place_Hanugoong.jpg", review: "85", price: "평균 7,000", star: 3.5, detail: "육개장 칼국수와 곰탕 그리고 만두로 유명한 식당입니다." , reserve: false},
        { title: '이서식당', image: "../images/place_Eseo.jpg", review: "90", price: "평균 13,000", star: 4.3, detail: "삼겹살과 김치찌개 그리고 제육볶음으로 유명한 고기집입니다." , reserve: false},
        { title: '유메식당', image: "../images/place_Umme.jpg", review: "101", price: "평균 8,000", star: 4.8, detail: "유라멘과 메라멘 그리고 차슈덮밥으로 유명한 일식집입니다." , reserve: false},
        { title: '밀플랜비', image: "../images/place_PlanB.jpg", review: "97", price: "평균 5,000", star: 4.2, detail: "부리또와 핫도그가 가성비 좋고 맛있기로 유명합니다." , reserve: false},
        { title: '포지타노', image: "../images/place_Positano.jpg", review: "64", price: "평균 15,000", star: 5, detail: "스테이크와 파스타가 맛있는 분위기 좋은 식당입니다.", reserve: true },
        { title: '앤의식탁', image: "../images/place_Ann.jpg", review: "60", price: "평균 10,000", star: 4, detail: "앤의 식탁만의 덮밥이 맛있고, 파스타 또한 맛있는 분위기 맛집입니다." , reserve: true},
    ]);
    
    return (
        <AuthContext.Provider value={{ user, placeData, setPlaceData, setUser, isLogin, setIsLogin }}>
            {children}
        </AuthContext.Provider>)
}

export function useAuthContext() {
    return useContext(AuthContext);
}
