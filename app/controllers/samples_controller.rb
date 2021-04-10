class SamplesController < ApplicationController
  def index
    render json: { title: "this site is ONEPIECE DB!" }
  end
end
