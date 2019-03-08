class Recipe < ApplicationRecord
  include PgSearch
  pg_search_scope :search_by_keyword, :against => [:title, :ingredients]

  has_many :images, dependent: :destroy, -> { order(position: :asc) }
  scope :with_attached_images, -> { includes(:images).merge(Image.with_attached_file) }
end
