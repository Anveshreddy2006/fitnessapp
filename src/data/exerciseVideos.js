// src/data/exerciseVideos.js

// Build a YouTube search URL from a query
const ytSearch = (q) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

/*
 Each key is an exercise name EXACTLY as in your dataset.
 This covers the first ~50 names you pasted from the console.
 You can add more later easily by extending this object.
*/

const EXERCISE_VIDEOS = {
  "3/4 Sit-Up": [
    {
      id: "3_4_sit_up_1",
      title: "3/4 Sit-Up exercise videos",
      url: ytSearch("3/4 Sit-Up exercise"),
    },
  ],

  "90/90 Hamstring": [
    {
      id: "90_90_hamstring_1",
      title: "90/90 Hamstring stretch tutorial",
      url: ytSearch("90/90 Hamstring exercise"),
    },
  ],

  "Ab Crunch Machine": [
    {
      id: "ab_crunch_machine_1",
      title: "How to use the Ab Crunch Machine",
      url: ytSearch("Ab Crunch Machine exercise"),
    },
  ],

  "Ab Roller": [
    {
      id: "ab_roller_1",
      title: "Ab Roller exercise demo",
      url: ytSearch("Ab Roller exercise"),
    },
  ],

  Adductor: [
    {
      id: "adductor_1",
      title: "Adductor exercise tutorial",
      url: ytSearch("Adductor exercise"),
    },
  ],

  "Adductor/Groin": [
    {
      id: "adductor_groin_1",
      title: "Adductor/Groin stretch & exercise",
      url: ytSearch("Adductor Groin stretch exercise"),
    },
  ],

  "Advanced Kettlebell Windmill": [
    {
      id: "adv_kb_windmill_1",
      title: "Advanced Kettlebell Windmill technique",
      url: ytSearch("Advanced Kettlebell Windmill exercise"),
    },
  ],

  "Air Bike": [
    {
      id: "air_bike_1",
      title: "Air Bike (bicycle crunch) tutorial",
      url: ytSearch("Air Bike ab exercise"),
    },
  ],

  "All Fours Quad Stretch": [
    {
      id: "all_fours_quad_1",
      title: "All Fours Quad Stretch demonstration",
      url: ytSearch("All Fours Quad Stretch"),
    },
  ],

  "Alternate Hammer Curl": [
    {
      id: "alt_hammer_curl_1",
      title: "Alternate Hammer Curl form guide",
      url: ytSearch("Alternate Hammer Curl exercise"),
    },
  ],

  "Alternate Heel Touchers": [
    {
      id: "alt_heel_toucher_1",
      title: "Alternate Heel Touchers exercise",
      url: ytSearch("Alternate Heel Touchers"),
    },
  ],

  "Alternate Incline Dumbbell Curl": [
    {
      id: "alt_inc_db_curl_1",
      title: "Alternate Incline Dumbbell Curl tutorial",
      url: ytSearch("Alternate Incline Dumbbell Curl exercise"),
    },
  ],

  "Alternate Leg Diagonal Bound": [
    {
      id: "alt_leg_diag_bound_1",
      title: "Alternate Leg Diagonal Bound drill",
      url: ytSearch("Alternate Leg Diagonal Bound exercise"),
    },
  ],

  "Alternating Cable Shoulder Press": [
    {
      id: "alt_cable_sh_press_1",
      title: "Alternating Cable Shoulder Press",
      url: ytSearch("Alternating Cable Shoulder Press"),
    },
  ],

  "Alternating Deltoid Raise": [
    {
      id: "alt_deltoid_raise_1",
      title: "Alternating Deltoid Raise demo",
      url: ytSearch("Alternating Deltoid Raise exercise"),
    },
  ],

  "Alternating Floor Press": [
    {
      id: "alt_floor_press_1",
      title: "Alternating Floor Press tutorial",
      url: ytSearch("Alternating Floor Press exercise"),
    },
  ],

  "Alternating Hang Clean": [
    {
      id: "alt_hang_clean_1",
      title: "Alternating Hang Clean technique",
      url: ytSearch("Alternating Hang Clean"),
    },
  ],

  "Alternating Kettlebell Press": [
    {
      id: "alt_kb_press_1",
      title: "Alternating Kettlebell Press exercise",
      url: ytSearch("Alternating Kettlebell Press"),
    },
  ],

  "Alternating Kettlebell Row": [
    {
      id: "alt_kb_row_1",
      title: "Alternating Kettlebell Row demo",
      url: ytSearch("Alternating Kettlebell Row"),
    },
  ],

  "Alternating Renegade Row": [
    {
      id: "alt_renegade_row_1",
      title: "Alternating Renegade Row form",
      url: ytSearch("Alternating Renegade Row exercise"),
    },
  ],

  "Ankle Circles": [
    {
      id: "ankle_circles_1",
      title: "Ankle Circles mobility drill",
      url: ytSearch("Ankle Circles warm up"),
    },
  ],

  "Ankle On The Knee": [
    {
      id: "ankle_on_knee_1",
      title: "Ankle On The Knee stretch",
      url: ytSearch("Ankle on the knee stretch"),
    },
  ],

  "Anterior Tibialis-SMR": [
    {
      id: "ant_tib_smr_1",
      title: "Anterior Tibialis SMR (foam rolling)",
      url: ytSearch("Anterior Tibialis SMR foam roll"),
    },
  ],

  "Anti-Gravity Press": [
    {
      id: "anti_gravity_press_1",
      title: "Anti-Gravity Press shoulder exercise",
      url: ytSearch("Anti-Gravity Press exercise"),
    },
  ],

  "Arm Circles": [
    {
      id: "arm_circles_1",
      title: "Arm Circles warm-up",
      url: ytSearch("Arm Circles shoulder warm up"),
    },
  ],

  "Arnold Dumbbell Press": [
    {
      id: "arnold_press_1",
      title: "Arnold Dumbbell Press tutorial",
      url: ytSearch("Arnold Dumbbell Press exercise"),
    },
  ],

  "Around The Worlds": [
    {
      id: "around_worlds_1",
      title: "Around The Worlds chest & shoulders",
      url: ytSearch("Around The Worlds dumbbell exercise"),
    },
  ],

  "Atlas Stone Trainer": [
    {
      id: "atlas_trainer_1",
      title: "Atlas Stone Trainer strongman exercise",
      url: ytSearch("Atlas Stone Trainer exercise"),
    },
  ],

  "Atlas Stones": [
    {
      id: "atlas_stones_1",
      title: "Atlas Stones strongman event",
      url: ytSearch("Atlas Stones strongman"),
    },
  ],

  "Axle Deadlift": [
    {
      id: "axle_deadlift_1",
      title: "Axle Deadlift technique",
      url: ytSearch("Axle Deadlift form"),
    },
  ],

  "Back Flyes - With Bands": [
    {
      id: "back_flyes_bands_1",
      title: "Back Flyes with Bands",
      url: ytSearch("Back Flyes with bands exercise"),
    },
  ],

  "Backward Drag": [
    {
      id: "backward_drag_1",
      title: "Backward Drag sled exercise",
      url: ytSearch("Backward Drag sled"),
    },
  ],

  "Backward Medicine Ball Throw": [
    {
      id: "backward_mb_throw_1",
      title: "Backward Medicine Ball Throw drill",
      url: ytSearch("Backward Medicine Ball Throw"),
    },
  ],

  "Balance Board": [
    {
      id: "balance_board_1",
      title: "Balance Board training basics",
      url: ytSearch("Balance Board exercise"),
    },
  ],

  "Ball Leg Curl": [
    {
      id: "ball_leg_curl_1",
      title: "Ball Leg Curl hamstring exercise",
      url: ytSearch("Ball Leg Curl exercise"),
    },
  ],

  "Band Assisted Pull-Up": [
    {
      id: "band_assisted_pu_1",
      title: "Band Assisted Pull-Up tutorial",
      url: ytSearch("Band Assisted Pull-Up exercise"),
    },
  ],

  "Band Good Morning": [
    {
      id: "band_gm_1",
      title: "Band Good Morning form",
      url: ytSearch("Band Good Morning exercise"),
    },
  ],

  "Band Good Morning (Pull Through)": [
    {
      id: "band_gm_pull_1",
      title: "Band Good Morning (Pull Through)",
      url: ytSearch("Band Good Morning Pull Through"),
    },
  ],

  "Band Hip Adductions": [
    {
      id: "band_hip_add_1",
      title: "Band Hip Adductions exercise",
      url: ytSearch("Band Hip Adductions"),
    },
  ],

  "Band Pull Apart": [
    {
      id: "band_pull_apart_1",
      title: "Band Pull Apart for rear delts",
      url: ytSearch("Band Pull Apart exercise"),
    },
  ],

  "Band Skull Crusher": [
    {
      id: "band_skull_crusher_1",
      title: "Band Skull Crusher triceps exercise",
      url: ytSearch("Band Skull Crusher exercise"),
    },
  ],

  "Barbell Ab Rollout": [
    {
      id: "bb_ab_rollout_1",
      title: "Barbell Ab Rollout tutorial",
      url: ytSearch("Barbell Ab Rollout exercise"),
    },
  ],

  "Barbell Ab Rollout - On Knees": [
    {
      id: "bb_ab_rollout_knees_1",
      title: "Barbell Ab Rollout on Knees",
      url: ytSearch("Barbell Ab Rollout on knees"),
    },
  ],

  "Barbell Bench Press - Medium Grip": [
    {
      id: "bb_bench_med_1",
      title: "Barbell Bench Press (medium grip) form",
      url: ytSearch("Barbell Bench Press medium grip"),
    },
  ],

  "Barbell Curl": [
    {
      id: "bb_curl_1",
      title: "Barbell Curl biceps exercise",
      url: ytSearch("Barbell Curl exercise"),
    },
  ],

  "Barbell Curls Lying Against An Incline": [
    {
      id: "bb_curl_incline_1",
      title: "Barbell Curls Lying Against An Incline",
      url: ytSearch("Barbell curls lying against an incline"),
    },
  ],

  "Barbell Deadlift": [
    {
      id: "bb_deadlift_1",
      title: "Barbell Deadlift technique guide",
      url: ytSearch("Barbell Deadlift proper form"),
    },
  ],

  "Barbell Full Squat": [
    {
      id: "bb_full_squat_1",
      title: "Barbell Full Squat tutorial",
      url: ytSearch("Barbell Full Squat exercise"),
    },
  ],

  "Barbell Glute Bridge": [
    {
      id: "bb_glute_bridge_1",
      title: "Barbell Glute Bridge for glutes",
      url: ytSearch("Barbell Glute Bridge exercise"),
    },
  ],

  "Barbell Guillotine Bench Press": [
    {
      id: "bb_guillotine_press_1",
      title: "Barbell Guillotine Bench Press",
      url: ytSearch("Barbell Guillotine Bench Press exercise"),
    },
  ],
  "Bench Dips": [
    {
      id: "bench_dips_1",
      title: "Bench Dips triceps exercise",
      url: ytSearch("Bench Dips triceps exercise"),
    },
  ],

  "Bench Press - Powerlifting": [
    {
      id: "bench_press_powerlifting_1",
      title: "Powerlifting Bench Press technique",
      url: ytSearch("Bench Press powerlifting form"),
    },
  ],

  "Bench Press With Chains": [
    {
      id: "bench_press_chains_1",
      title: "Bench Press With Chains tutorial",
      url: ytSearch("Bench Press with chains exercise"),
    },
  ],

  "Board Press": [
    {
      id: "board_press_1",
      title: "Board Press bench press variation",
      url: ytSearch("Board Press bench press exercise"),
    },
  ],

  "Body-Up": [
    {
      id: "body_up_1",
      title: "Body-Up (plank to push-up) exercise",
      url: ytSearch("Body-Up exercise plank to push up"),
    },
  ],
  "Behind Head Chest Stretch": [
    {
      id: "behind_head_chest_stretch_1",
      title: "Behind Head Chest Stretch tutorial",
      url: ytSearch("Behind Head Chest Stretch exercise"),
    },
  ],
  "Barbell Incline Bench Press - Medium Grip": [
    {
      id: "barbell_incline_bench_press_medium_grip_1",
      title: "Incline Barbell Bench Press Medium Grip Tutorial",
      url: ytSearch("Incline Barbell Bench Press Medium Grip"),
    },
  ],
  "Box Jump (Multiple Response)": [
    {
      id: "box_jump_multiple_response_1",
      title: "Box Jump Exercise Tutorial",
      url: ytSearch("Box Jump workout technique"),
    },
  ],
  "Carioca Quick Step": [
    {
      id: "carioca_quick_step_1",
      title: "Carioca Quick Step Exercise Tutorial",
      url: ytSearch("Carioca Quick Step drill exercise tutorial"),
    },
  ],
  "Groin And Back Stretch": [
    {
      id: "groin_and_back_stretch_1",
      title: "Groin and Back Stretch Tutorial",
      url: ytSearch("Groin and Back Stretch exercise tutorial"),
    },
  ],
  Groiners: [
    {
      id: "groiners_1",
      title: "Groiners Mobility Exercise Tutorial",
      url: ytSearch("Groiner exercise tutorial mobility"),
    },
  ],
  "Barbell Hack Squat": [
    {
      id: "barbell_hack_squat_1",
      title: "How to Perform Barbell Hack Squat",
      url: ytSearch("Barbell Hack Squat exercise tutorial"),
    },
  ],
  "Barbell Lunge": [
    {
      id: "barbell_lunge_1",
      title: "Barbell Lunge Exercise Tutorial",
      url: ytSearch("Barbell Lunge proper form tutorial"),
    },
  ],
  "Brachialis-SMR": [
    {
      id: "brachialis_smr_1",
      title: "Brachialis SMR | Self Myofascial Release Tutorial",
      url: ytSearch("Brachialis SMR self myofascial release tutorial"),
    },
  ],

  "Cable Hammer Curls - Rope Attachment": [
    {
      id: "cable_hammer_curl_rope_1",
      title: "Cable Hammer Curls with Rope Attachment | Proper Technique",
      url: ytSearch("Cable Hammer Curls Rope Attachment exercise tutorial"),
    },
  ],
  "Bent Over One-Arm Long Bar Row": [
    {
      id: "bent_over_one_arm_long_bar_row_1",
      title: "Bent Over One-Arm Long Bar Row Tutorial",
      url: ytSearch("Bent Over One-Arm Long Bar Row exercise tutorial"),
    },
  ],

  "Bent Over Two-Arm Long Bar Row": [
    {
      id: "bent_over_two_arm_long_bar_row_1",
      title: "Bent Over Two-Arm Long Bar Row Tutorial",
      url: ytSearch("Bent Over Two-Arm Long Bar Row exercise tutorial"),
    },
  ],

  "Bent Over Two-Dumbbell Row": [
    {
      id: "bent_over_two_dumbbell_row_1",
      title: "Bent Over Two-Dumbbell Row Tutorial",
      url: ytSearch("Bent Over Two-Dumbbell Row exercise tutorial"),
    },
  ],
};

export default EXERCISE_VIDEOS;
