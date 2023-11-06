const mongoose = require('mongoose');

const newcarData = new mongoose.Schema({
    brand:{type: String},
    model:{type: String,},
    version:{type: String,},
    car: {
          }
    // engine_type:{type: String,},
    // displacement_cc:{type: Number},
    // max_power:{type: String,},
    // max_torque:{type: String,},
    // no_of_cylinder:{type: Number},
    // valves_per_cylinder:{type: Number},
    // turbo_charger:{type: String,},
    // transmissiontype:{type: String,},
    // gear_box:{type: String,},
    // fuel_type:{type: String,},
    // diesel_mileage_arai:{type: Number},
    // diesel_fuel_tank_capacity_litres:{type: Number},
    // diesel_highway_mileage:{type: Number},
    // emission_norm_compliance:{type: String,},
    // front_suspension:{type: String,},
    // rear_suspension:{type: String,},
    // steering_type:{type: String,},
    // steering_column:{type: String,},
    // turning_radius_metres:{type: Number},
    // front_brake_type:{type: String,},
    // rear_brake_type:{type: String,},
    // length_mm:{type: Number},
    // width_mm:{type: Number},
    // height_mm:{type: Number},
    // boot_space_litres:{type: Number},
    // seating_capacity:{type: Number},
    // ground_clearance_unladen_mm:{type: Number},
    // wheel_base_mm:{type: Number},
    // no_of_doors:{type: Number},
    // power_steering:{type: String,},
    // power_windows_front:{type: String,},
    // power_windows_rear:{type: String,},
    // air_conditioner:{type: String,},
    // heater:{type: String,},
    // adjustable_steering:{type: String,},
    // automatic_climate_control:{type: String,},
    // low_fuel_warning_light:{type: String,},
    // accessory_power_outlet:{type: String,},
    // rear_seat_headrest:{type: String,},
    // adjustable_headrest:{type: String,},
    // rear_seat_centre_arm_rest:{type: String,},
    // height_adjustable_front_seat_belts:{type: String,},
    // rear_ac_vents:{type: String,},
    // seat_lumbar_support:{type: String,},
    // cruise_control:{type: String,},
    // parking_sensors:{type: String,},
    // navigation_system:{type: String,},
    // foldable_rear_seat:{type: String,},
    // keyless_entry:{type: String,},
    // engine_start_stop_button:{type: String,},
    // glove_box_cooling:{type: String,},
    // voice_control:{type: String,},
    // usb_charger:{type: String,},
    // central_console_armrest:{type: String},
    // tailgate_ajar:{type: String,},
    // drive_modes:{type: Number},
    // additional_features:{type: String,},
    // electronic_multi_tripmeter:{type: String,},
    // leather_seats:{type: String,},
    // leather_steering_wheel:{type: String,},
    // leather_wrap_gearshift_selector:{type: String,},
    // glove_compartment:{type: String,},
    // digital_clock:{type: String,},
    // digital_odometer:{type: String,},
    // driving_experience_control_eco:{type: String,},
    // height_adjustable_driver_seat:{type: String,},
    // dual_tone_dashboard:{type: String,},
    // adjustable_headlights:{type: String,},
    // fog_lights__front:{type: String,},
    // fog_lights__rear:{type: String,},
    // power_adjustable_exterior_rear_view_mirror:{type: String,},
    // manually_adjustable_ext_rear_view_mirror:{type: String,},
    // electric_folding_rear_view_mirror:{type: String,},
    // rain_sensing_wiper:{type: String,},
    // rear_window_wiper:{type: String,},
    // rear_window_washer:{type: String,},
    // rear_window_defogger:{type: String,},
    // wheel_covers:{type: String,},
    // alloy_wheels:{type: String,},
    // power_antenna:{type: String,},
    // rear_spoiler:{type: String,},
    // projector_headlamps:{type: String,},
    // halogen_headlamps:{type: String,},
    // cornering_foglamps:{type: String,},
    // tyre_size:{type: String,},
    // tyre_type:{type: String,},
    // wheel_size:{type: Number},
    // led_drls:{type: String,},
    // safety:{type: String,},
    // antilock_braking_system:{type: String,},
    // central_locking:{type: String,},
    // power_door_locks:{type: String,},
    // child_safety_locks:{type: String,},
    // antitheft_alarm:{type: String,},
    // no_of_airbags:{type: Number},
    // driver_airbag:{type: String,},
    // passenger_airbag:{type: String,},
    // passenger_side_rear_view_mirror:{type: String,},
    // rear_seat_belts:{type: String,},
    // seat_belt_warning:{type: String,},
    // door_ajar_warning:{type: String,},
    // adjustable_seats:{type: String,},
    // tyre_pressure_monitor:{type: String,},
    // engine_immobilizer:{type: String,},
    // crash_sensor:{type: String,},
    // engine_check_warning:{type: String,},
    // automatic_headlamps:{type: String,},
    // ebd:{type: String,},
    // advance_safety_features:{type: String,},
    // follow_me_home_headlamps:{type: String,},
    // rear_camera:{type: String,},
    // speed_alert:{type: String,},
    // speed_sensing_auto_door_lock:{type: String,},
    // isofix_child_seat_mounts:{type: String,},
    // pretensioners__force_limiter_seatbelts:{type: String,},
    // impact_sensing_auto_door_unlock:{type: String,},
    // entertainment__communication:{type: String,},
    // radio:{type: String,},
    // speakers_front:{type: String,},
    // speakers_rear:{type: String,},
    // integrated_2din_audio:{type: String,},
    // usb__auxiliary_input:{type: String,},
    // bluetooth_connectivity:{type: String,},
    // touch_screen:{type: String,},
    // touch_screen_size:{type: String,},
    // android_auto:{type: String,},
    // apple_carplay:{type: String,},
    // no_of_speakers:{type: Number},
    // fabric_upholstery:{type: String,}
})

const NewCarData = mongoose.model('NEWCARDATA', newcarData);

module.exports = NewCarData;