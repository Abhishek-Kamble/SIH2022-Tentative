export default function validate(value) {
    const { property_address,areacovered,yearconstruction, zone_id,user_id,use,constructortype,occupancytype,type,aff_id_bd_name,aff_id_bd,app_id_bd_name,app_id_bd } = value
    if(property_address && areacovered && yearconstruction &&  zone_id && user_id && use && constructortype && occupancytype && type && aff_id_bd_name && aff_id_bd && app_id_bd_name && app_id_bd){
        return true;
    }
    return false;

}