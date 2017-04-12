# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170412131427) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "prescription_to_weekday_joins", force: :cascade do |t|
    t.integer  "prescriptions_id"
    t.integer  "weekdays_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["prescriptions_id"], name: "index_prescription_to_weekday_joins_on_prescriptions_id", using: :btree
    t.index ["weekdays_id"], name: "index_prescription_to_weekday_joins_on_weekdays_id", using: :btree
  end

  create_table "prescriptions", force: :cascade do |t|
    t.integer  "users_id"
    t.boolean  "active",               default: true
    t.string   "status"
    t.string   "name"
    t.text     "description"
    t.text     "physical_description"
    t.text     "caution"
    t.text     "notes"
    t.float    "dosage",               default: 1.0
    t.integer  "total",                default: 0
    t.float    "count",                default: 0.0
    t.time     "interval",             default: '2000-01-01 00:00:00'
    t.time     "start_time",           default: '2000-01-01 00:00:00'
    t.time     "end_time",             default: '2000-01-01 00:00:00'
    t.datetime "created_at",                                           null: false
    t.datetime "updated_at",                                           null: false
    t.text     "instructions"
    t.index ["users_id"], name: "index_prescriptions_on_users_id", using: :btree
  end

  create_table "reminders", force: :cascade do |t|
    t.integer  "prescriptions_id"
    t.time     "transmit_time"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "single_use_token"
    t.index ["prescriptions_id"], name: "index_reminders_on_prescriptions_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "token"
    t.string   "username"
    t.string   "email"
    t.string   "phone"
    t.string   "forename"
    t.string   "surname"
    t.string   "patient_name"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.string   "avatar"
    t.string   "patient_avatar"
    t.string   "password_digest"
    t.boolean  "active",          default: true
    t.string   "patient_gender"
    t.date     "patient_dob"
  end

  create_table "weekdays", force: :cascade do |t|
    t.string   "day"
    t.integer  "day_of_the_week"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_foreign_key "prescription_to_weekday_joins", "prescriptions", column: "prescriptions_id"
  add_foreign_key "prescription_to_weekday_joins", "weekdays", column: "weekdays_id"
  add_foreign_key "prescriptions", "users", column: "users_id"
  add_foreign_key "reminders", "prescriptions", column: "prescriptions_id"
end
