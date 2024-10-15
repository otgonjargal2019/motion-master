const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center bg-black overflow-x-hidden">
      {children}
      <footer className="footer">
        <img src="/footer.png" />
        <div className="bottom-part">
          <p className="text-white text-[24px] font-medium ">
            스트리머와 게임 개발자를 위한 저작권 문제 해결 솔루션
          </p>
          <div className="h-[1px] bg-[#888888] mt-[15px]"></div>
          <p className="text-white text-[20px] font-bold mt-[26px] mb-4">
            엘에스웨어(주)
          </p>
          <ul className="text-[#C4C4C4] text-[20px] font-medium flex flex-wrap gap-[64px]">
            <li>대표자명 : 김민수</li>
            <li>
              서울특별시 금천구 서부샛길 606(가산동 543-1) 대성디폴리스A동 18층
            </li>
            <li>대표전화 : 02-6919-0322</li>
            <li>사업자등록번호 : 113-81-96801</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
