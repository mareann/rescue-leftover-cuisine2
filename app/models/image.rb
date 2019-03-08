class Image < ApplicationRecord
  belongs_to :recipe
  acts_as_list scope: :recipe

  has_one_attached :file
  delegate_missing_to :file
end
