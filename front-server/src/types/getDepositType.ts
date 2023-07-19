interface DepositType {
    id?: number;
    fin_prdt_cd?: string;
    kor_co_nm?: string;
    fin_prdt_nm?: string;
    etc_note?: string;
    join_deny?: number;
    join_member?: string;
    join_way?: string;
    spcl_cnd?: string;
    mtrt_int?: string;
    max_limit?: number;
    dcls_strt_day?: number;
    dcls_end_day?: number;
}

export default DepositType;